interface CardProps {
  id: string;
  title: string;
  desc: Array<string>;
}

export const Card: React.FC<CardProps> = ({ id, title, desc }) => {
  const renderDesc = desc.map((item: string) => <div key={item}>{item}</div>);
  return (
    <div className='card-box'>
      <section className='card-title'>{title}</section>
      <section className='d-flex'>
        <div className='card-bar'>&nbsp;</div>
        <div className='card-desc'>{renderDesc}</div>
      </section>
    </div>
  );
};
