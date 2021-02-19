import '../css/Content.css';
import { Card } from 'react-bootstrap';
import Subjects from './SubjectList';

function Content () {
    const chapters = [
        {title: "subject1", name: "French"},
        {title: "subject2", name: "arts"},
        {title: "subject3", name: "social studies"},
        {title: "subject4", name: "mathematics"},
        {title: "subject5", name: "physics"},
        {title: "subject6", name: "Biology"},
    ]

    const listCards = (<ul>
        {chapters.map(chapter => 
        (
        <Card>
        <Card.Body>
          <Card.Title>{chapter.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{chapter.title}</Card.Subtitle>
          <Card.Text>
            click here.
          </Card.Text>
        </Card.Body>
      </Card>)
        )}
        </ul>);

    const noContent = (<h1>no courses registered</h1>);

    return (
        <div className="app-content">
            <Subjects/>
        </div>
    );
}

export default Content;