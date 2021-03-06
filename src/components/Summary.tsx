import React, { Dispatch } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SummaryTable } from './SummaryTable';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { RootAction } from '../game/reducer';
import { switchViewToIntro } from '../game/actions';

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  onClick: () => dispatch(switchViewToIntro())
});

type SummaryProps = ReturnType<typeof mapDispatchToProps>;

const _Summary: React.FC<SummaryProps> = ({ onClick }) => (
  <Container>
    <Row style={{ justifyContent: 'center' }}>
      <h1>Summary</h1>
    </Row>
    <Row style={{ justifyContent: 'center' }}>
      <SummaryTable />
    </Row>
    <Row className="d-flex justify-content-end">
      <Button variant="secondary" onClick={onClick}>
        Back to Intro
      </Button>
    </Row>
  </Container>
);

export const Summary = connect(null, mapDispatchToProps)(_Summary);
