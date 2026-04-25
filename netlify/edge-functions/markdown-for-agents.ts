export default async function handler(request, context) {
  const accept = request.headers.get('accept') || '';

  if (!accept.includes('text/markdown')) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';

  if (!contentType.includes('text/html')) {
    return response;
  }

  const html = await response.text();
  const markdown = htmlToMarkdown(html);
  const estimatedTokens = Math.ceil(markdown.length / 4);

  return new Response(markdown, {
    status: response.status,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'x-content-mode': 'markdown-for-agents',
      'x-markdown-tokens': String(estimatedTokens),
      'cache-control': 'public, max-age=3600, must-revalidate',
    },
  });
}

function htmlToMarkdown(html) {
  let text = html;

  text = text.replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '');
  text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  text = text.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
  text = text.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
  text = text.replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '');
  text = text.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '');
  text = text.replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, '');

  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');
  text = text.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n');
  text = text.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n');

  text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');
  text = text.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  text = text.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  text = text.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  text = text.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, function (match, content) {
    const cleaned = content.replace(/<[^>]+>/g, '').trim();
    return '- ' + cleaned + '\n';
  });

  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<hr\s*\/?>/gi, '\n---\n');

  text = text.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, function (match, content) {
    return content.split('\n').map(function (line) { return '> ' + line; }).join('\n');
  });

  text = text.replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, '![$1]');
  text = text.replace(/<img[^>]*>/gi, '');

  text = text.replace(/<[^>]+>/g, '');

  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&#39;/g, "'");
  text = text.replace(/&nbsp;/g, ' ');

  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();

  return text;
}

export const config = {
  path: '/*',
};
