import React from 'react';

export const SlackCSS = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @font-face {
          font-family: Slack;
          src: url(https://cdn.jsdelivr.net/gh/ChitlangeSahas/react-reactions@main/fonts/slack-icons-Regular.eot);
          src: url(https://cdn.jsdelivr.net/gh/ChitlangeSahas/react-reactions@main/fonts/slack-icons-Regular.eot?#iefix) format('embedded-opentype'),
               url(https://cdn.jsdelivr.net/gh/ChitlangeSahas/react-reactions@main/fonts/slack-icons-Regular.woff?raw=true) format('woff'),
               url(https://cdn.jsdelivr.net/gh/ChitlangeSahas/react-reactions@main/fonts/slack-icons-Regular.ttf?raw=true) format('truetype')
        }
        .frame::-webkit-scrollbar {
            -webkit-appearance: none;
        }
        .frame::-webkit-scrollbar:vertical {
            width: 8px;
        }
        .frame::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #D9D9DE;
            box-shadow: 0 0 0 3px #fff;
            height: 30px;
        }
        .frame::-webkit-scrollbar-track {
            background-color: #F3F3F3;
            border-radius: 4px;
        }
      `,
      }}
    />
  );
};

export default SlackCSS;
