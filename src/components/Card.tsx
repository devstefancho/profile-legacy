interface DescItem {
  content: string;
  period?: string;
  url?: string;
}

interface CardProps {
  id: string;
  title: string;
  desc: DescItem[];
}

export const Card: React.FC<CardProps> = ({ id, title, desc }) => {
  const renderDesc = desc.map((item) => {
    if (item.url) {
      return (
        <a key={title} href={item.url} target='_blank'>
          <div>{item.content}</div>
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
    return <div key={title}>{item.content}</div>;
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
