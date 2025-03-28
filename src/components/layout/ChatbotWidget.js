import React, { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // Check if Voiceflow script is already loaded
    if (window.voiceflow || document.querySelector('script[src*="voiceflow"]')) {
      console.log('Voiceflow script already loaded, skipping...');
      return;
    }

    // Add Voiceflow script when component mounts
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'voiceflow-script'; // Add an ID to easily identify the script
    script.innerHTML = `
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '67dbfc6acbe88befffefaae9' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          },
          styles: {
            dimensions: {
              width: {
                open: '320px',  // Smaller width when open
                closed: '60px'  // Width when closed (button only)
              },
              height: {
                open: '450px',  // Smaller height when open
                closed: '60px'  // Height when closed (button only)
              }
            },
            position: {
              bottom: 'var(--spacing-md)',
              right: 'var(--spacing-md)'
            },
            borderRadius: 'var(--border-radius-md)',
            shadow: 'var(--shadow-md)'
          }
        });
      }
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
    `;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptElement = document.getElementById('voiceflow-script');
      if (scriptElement && document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible, it just loads the script
};

export default ChatbotWidget;