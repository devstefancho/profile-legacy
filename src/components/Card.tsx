import { Icon } from '@iconify/react';
interface DescItem {
  content: string;
  period?: string;
  url?: string;
  icon?: string;
}

interface CardProps {
  id: string;
  title: string;
  desc: DescItem[];
}

const getIconName = (icon: string) => {
  return /[:]/.test(icon) ? icon : `logos:${icon}`;
};

export const Card: React.FC<CardProps> = ({ id, title, desc }) => {
  const renderDesc = desc.map((item) => {
    if (item.url && item.icon) {
      return (
        <a
          key={title}
          href={item.url}
          target='_blank'
          className='d-flex align-items-center'
        >
          <Icon icon={getIconName(item.icon)} />
          <div className='p-2'>{item.content}</div>
        </a>
      );
    }

    if (item.period) {
      return (
        <div>
          <div className=''>{item.period}</div>
          <div className='fw-bold'>{item.content}</div>
        </div>
      );
    }

    if (item.icon) {
      return (
        <div key={title} className='d-flex align-items-center'>
          <Icon icon={getIconName(item.icon)} />
          <div className='p-2'>{item.content}</div>
        </div>
      );
    }
    return (
      <div key={title}>
        <div>{item.content}</div>
      </div>
    );
  });

  return (
    <div className='card-box'>
      <section className='card-title'>{title}</section>
      <section className='d-flex'>
        <div className='card-desc'>{renderDesc}</div>
      </section>
    </div>
  );
};
