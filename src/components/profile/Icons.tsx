import { ReactElement, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { OverlayChildren } from 'react-bootstrap/esm/Overlay';
import { Github, Blog, Gmail, Stackoverflow } from '../../svg';
import url from '../../json/url.json';

const initialMessage = 'Copy to Clipboard';
const copied = 'Copied!';

interface RenderIcon {
  href: string;
  src: string;
  alt?: string;
}

const RenderIcon: React.FC<RenderIcon> = ({ href, src, alt }) => {
  return (
    <div className='icon'>
      <a href={href} target='_blank'>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export const Icons: React.FC = () => {
  const [message, setMessage] = useState<string>(initialMessage);

  const onClickCopyGmail = async () => {
    await navigator.clipboard.writeText(url.gmail);
    setMessage(copied);
  };

  const onMouseLeaveIcon: React.MouseEventHandler<HTMLDivElement> = () => {
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
      <RenderIcon href={url.github} src={Github} alt='github' />
      <RenderIcon href={url.blog} src={Blog} alt='blog' />
      <OverlayTrigger placement='top-start' overlay={renderToolTip}>
        <div onClick={onClickCopyGmail} onMouseLeave={onMouseLeaveIcon}>
          <RenderIcon href={`mailto:${url.gmail}`} src={Gmail} alt='gmail' />
        </div>
      </OverlayTrigger>
      <RenderIcon
        href={url.stackoverflow}
        src={Stackoverflow}
        alt='stackoverflow'
      />
    </div>
  );
};
