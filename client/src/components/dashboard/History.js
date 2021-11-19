import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';

import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';



export default function DashCard({  title, children }) {
    return (
		<div className="w-full md:w-4/12 px-4 flex justify-center text-center">
            <Card>
                <CardBody >
                   
                    <H6 color="gray">{title}</H6>
                    <Paragraph color="blueGray">{children}</Paragraph>
                </CardBody>
            </Card>
        </div>
    );
}
