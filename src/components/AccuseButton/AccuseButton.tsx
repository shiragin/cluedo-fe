import Button from 'react-bootstrap/Button';

const AccuseButton = () => {
    
    function onAccuse() {
        console.log("This player accuse");
    }

    return (
        <Button variant="success" onClick={onAccuse}> Accuse </Button>
    )
}

export default AccuseButton;