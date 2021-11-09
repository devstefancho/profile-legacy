import { ReactElement, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { OverlayChildren } from 'react-bootstrap/esm/Overlay';
import { Github, Blog, Gmail, Stackoverflow, Linkedin } from '../../svg';
import url from '../../json/url.json';

const initialMessage = 'Copy to Clipboard';
const copied = 'Copied!';

type RenderIcon = {
  href: string;
  src: string;
  alt?: string;
};

type RenderCustomIcon = {
  render: () => ReactElement;
};

type RenderIconProps = RenderIcon | RenderCustomIcon;

const RenderIcon = (props: RenderIconProps) => {
  if ('render' in props) {
    return props.render();
  }

  return (
    <div className='icon'>
      <a href={props.href} target='_blank'>
        <img src={props.src} alt={props.alt} />
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
      <RenderIcon
        href={url.stackoverflow}
        src={Stackoverflow}
        alt='stackoverflow'
      />
      <RenderIcon href={url.linkedin} src={Linkedin} alt='linkedin' />
      <RenderIcon
        render={() => (
          <OverlayTrigger placement='top-start' overlay={renderToolTip}>
            <div
              className='icon'
              onClick={onClickCopyGmail}
              onMouseLeave={onMouseLeaveIcon}
            >
              <a href={`mailto:${url.gmail}`} target='_blank'>
                <img src={Gmail} alt={'gmail'} />
              </a>
            </div>
          </OverlayTrigger>
        )}
      />
    </div>
  );
};
