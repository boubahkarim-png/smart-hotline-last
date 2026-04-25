import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Documentation | Smart Hotline',
  description: 'Smart Hotline Agency API documentation — service endpoints, MCP server, and agent discovery.',
  robots: { index: true, follow: true },
}

export default function DocsApiPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Smart Hotline — API Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Agent Discovery Endpoints</h2>
        <p className="mb-4 text-gray-700">
          Smart Hotline exposes machine-readable discovery documents for AI agents, crawlers, and integrations.
          All endpoints are available under the <code className="bg-gray-100 px-2 py-1 rounded text-sm">/.well-known/</code> path prefix.
        </p>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="py-3 pr-4 font-semibold">Endpoint</th>
              <th className="py-3 pr-4 font-semibold">Rel</th>
              <th className="py-3 pr-4 font-semibold">Type</th>
              <th className="py-3 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-4"><code className="text-sm bg-gray-100 px-2 py-1 rounded">/.well-known/api-catalog</code></td>
              <td className="py-3 pr-4"><code className="text-sm">api-catalog</code></td>
              <td className="py-3 pr-4">application/linkset+json</td>
              <td className="py-3">Full catalog of service pages and resources</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-4"><code className="text-sm bg-gray-100 px-2 py-1 rounded">/docs/api</code></td>
              <td className="py-3 pr-4"><code className="text-sm">service-doc</code></td>
              <td className="py-3 pr-4">text/html</td>
              <td className="py-3">This page — human-readable API documentation</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-4"><code className="text-sm bg-gray-100 px-2 py-1 rounded">/.well-known/mcp/server-card.json</code></td>
              <td className="py-3 pr-4"><code className="text-sm">mcp-server</code></td>
              <td className="py-3 pr-4">application/json</td>
              <td className="py-3">MCP server card (SEP-1649 streamable-http transport)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-4"><code className="text-sm bg-gray-100 px-2 py-1 rounded">/.well-known/agent-card.json</code></td>
              <td className="py-3 pr-4"><code className="text-sm">a2a</code></td>
              <td className="py-3 pr-4">application/json</td>
              <td className="py-3">A2A agent card with skills and capabilities</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 pr-4"><code className="text-sm bg-gray-100 px-2 py-1 rounded">/llms.txt</code></td>
              <td className="py-3 pr-4"><code className="text-sm">ai-content</code></td>
              <td className="py-3 pr-4">text/plain</td>
              <td className="py-3">LLM-optimized content summary</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">MCP Server (SEP-1649)</h2>
        <p className="mb-4 text-gray-700">
          The Smart Hotline MCP server uses the <strong>streamable-http</strong> transport protocol.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
          <p>Endpoint: <code>https://www.smart-hotline.com/api/mcp</code></p>
          <p>Transport: streamable-http</p>
          <p>Capabilities: tools, resources</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">A2A Agent Skills</h2>
        <div className="grid gap-4">
          {[
            { id: 'lead-generation', name: 'Lead Generation', desc: 'B2B/B2C prospect list building, qualification, and enrichment via SuiteCRM.' },
            { id: 'cold-calling', name: 'Cold Calling', desc: 'Outbound calling campaigns with trained agents, ViciDial dialer, and real-time reporting.' },
            { id: 'appointment-scheduling', name: 'Appointment Scheduling', desc: 'AI-powered booking, confirmation calls, reminders, and calendar integration.' },
            { id: 'crm-integration', name: 'CRM Integration', desc: 'SuiteCRM hosting, lead pipeline management, Mautic email marketing, data enrichment.' },
            { id: 'call-answering', name: '24/7 Call Answering', desc: 'Professional phone answering with zero missed calls guarantee.' },
            { id: 'ai-voice-agent', name: 'AI Voice Agent (Sophie)', desc: 'Sub-2-second AI phone answering in French and English.' },
            { id: 'customer-support', name: 'Customer Support', desc: 'Multi-channel support: phone, email, chat, WhatsApp with SLA tracking.' },
          ].map(skill => (
            <div key={skill.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <p className="text-gray-600 mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Content Negotiation</h2>
        <p className="mb-4 text-gray-700">
          All HTML pages support <strong>Markdown content negotiation</strong>. Send <code className="bg-gray-100 px-2 py-1 rounded text-sm">Accept: text/markdown</code>
          to receive a Markdown version of any page instead of HTML.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
          <p>curl -H &quot;Accept: text/markdown&quot; https://www.smart-hotline.com/fr/</p>
        </div>
        <p className="mt-4 text-gray-700">
          Markdown responses include the <code className="bg-gray-100 px-2 py-1 rounded text-sm">x-markdown-tokens</code> header
          with an estimated token count for LLM context budgeting.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Content Signals</h2>
        <p className="mb-4 text-gray-700">
          The <code className="bg-gray-100 px-2 py-1 rounded text-sm">robots.txt</code> declares content signals for AI crawlers:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
          <p>Content-Signal: ai-train=no</p>
          <p>Content-Signal: search=yes</p>
          <p>Content-Signal: ai-input=no</p>
        </div>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
          <li><strong>ai-train=no</strong> — Content must not be used for AI model training</li>
          <li><strong>search=yes</strong> — Content may be indexed and cited in AI search results</li>
          <li><strong>ai-input=no</strong> — Content must not be used as AI prompt input</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Link Headers (RFC 8288)</h2>
        <p className="mb-4 text-gray-700">
          Every response includes RFC 8288 Link headers for automated discovery:
        </p>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
{`Link: </.well-known/api-catalog>; rel="api-catalog"
Link: </docs/api>; rel="service-doc"
Link: </.well-known/mcp/server-card.json>; rel="mcp-server"
Link: </.well-known/agent-card.json>; rel="a2a"`}
        </div>
      </section>
    </main>
  )
}
