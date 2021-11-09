import { Card } from '.';
import content from '../json/content.json';

export const CardContainer: React.FC = () => {
  const renderCards = content.map(({ id, title, desc }) => {
    return <Card key={id} id={id} title={title} desc={desc} />;
  });

  return <div>{renderCards}</div>;
};
