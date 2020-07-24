import React, {Component} from 'react';
import { Card, ListGroup, CardHeader, CardBody, CardTitle, CardText, ListGroupItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Questao4 extends Component {
    render() {
        return(
            <Card>
                <CardHeader><h1>Atividade 1 - WEB (Bootstrap)</h1></CardHeader>
                <CardBody>
                    <CardTitle><h2>Questão 4/5</h2></CardTitle>
                    <CardText>Aproveitando a 2ª questão usando Bootstrap</CardText>
                    <ListGroup>
                        <ListGroupItem><h5>Nome: {this.props.name}</h5></ListGroupItem>
                        <ListGroupItem><h5>Curso: {this.props.course}</h5></ListGroupItem> 
                        <ListGroupItem><h5>Cidade natal: {this.props.city}</h5></ListGroupItem> 
                    </ListGroup>
                </CardBody>
            </Card>
        )
    }
}

/* <div class="Card" style="width: 20rem;">
    <div class="card-header">
        Atividade 1 - WEB - Questão 4
    </div>
    <div class="body">
        <h4 class="card-title"> Questão 4 </h4>
        <p class="card-text">Questão 4 usando Bootstrap da Questão 5</p>
    </div>
    <ul class="list-group">

    </ul> */