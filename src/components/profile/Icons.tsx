import { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { OverlayChildren } from 'react-bootstrap/esm/Overlay';
import { Github, Blog, Gmail, Stackoverflow } from '../../svg';
import url from '../../json/url.json';

const initialMessage = 'Copy to Clipboard';
const copied = 'Copied!';

export const Icons: React.FC = () => {
  const [message, setMessage] = useState<string>(initialMessage);

  const onClickCopyGmail = async () => {
    await navigator.clipboard.writeText(url.gmail);
    setMessage(copied);
  };

  const onMouseLeaveIcon = () => {
    setTimeout(() => setMessage(initialMessage), 500);
  };

  const renderToolTip: OverlayChildren = (props) => {
    return (
      <Tooltip id='gmail-tooltip' {...props}>
        {message}
      </Tooltip>
    );
  };

  return (
    <div className='icon-container d-flex justify-content-between'>
      <div className='icon'>
        <a href={url.github} target='_blank'>
          <img src={Github} alt='github' />
        </a>
      </div>
      <div className='icon'>
        <a href={url.blog} target='_blank'>
          <img src={Blog} alt='blog' />
        </a>
      </div>
      <OverlayTrigger placement='top-start' overlay={renderToolTip}>
        <div
          className='icon'
          onClick={onClickCopyGmail}
          onMouseLeave={onMouseLeaveIcon}
        >
          <img src={Gmail} alt='gmail' />
        </div>
      </OverlayTrigger>
      <div className='icon'>
        <a href={url.stackoverflow} target='_blank'>
          <img src={Stackoverflow} alt='stackoverflow' />
        </a>
      </div>
    </div>
  );
};
