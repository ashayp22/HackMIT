class Page extends React.Component {
    constructor(props) {
        super(props)
        this.pageBody = React.createRef()
        this.state = {

        }
    }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
    
    render() {
        let divStyle = {
            width: "100%",
            height: (document.body.clientHeight /2 ) + "px",
            textAlign: 'center'
        }
        return (
            <div style={divStyle}>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button>
            </div>
        )
    }
}