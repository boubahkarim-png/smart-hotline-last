'use client'
import Script from 'next/script'

export default function TawkToChat() {
  const tawkId = process.env.NEXT_PUBLIC_TAWK_ID

  if (!tawkId || tawkId === 'YOUR_TAWK_ID' || tawkId.trim() === '') {
    return null
  }

  return (
    <Script
      id="tawkto-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/${tawkId}/1jkdharj3';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            Tawk_API.onLoad = function(){
              var lang = document.documentElement.lang || 'fr';
              if (lang === 'fr') {
                Tawk_API.maximize();
              }
            };
          })();
        `
      }}
    />
  )
}
