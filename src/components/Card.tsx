interface CardProps {
  id: string;
  title: string;
  desc: Array<string>;
}

export const Card: React.FC<CardProps> = ({ id, title, desc }) => {
  const renderDesc = desc.map((item: string) => <div>{item}</div>);
  return (
    <div className='card-box'>
      <div className='card-title'>{title}</div>
      <div className='d-flex'>
        <div className='card-bar'>&nbsp;</div>
        <p className='card-desc'>{renderDesc}</p>
      </div>
    </div>
  );
};
