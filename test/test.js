const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const should = chai.should()
const expect = chai.expect

chai.use(chaiHttp)

// ---> DEBUT
/**
  * Génération des nouvelles couleurs et enregistrement de ces
  * couleurs dans un tableau.
  */
  const newValues = []
  const colorKey = 'NEW_COLOR_'
  let nextCursor = 0;
  const payloadColor = () => {
    const nextColor = `${colorKey}${nextCursor}`
    newValues.push(nextColor)
    nextCursor++;
    return { 'color': nextColor }
  }
  const getCurrentCulor = () => {
    return nextCursor > 0 ? `${colorKey}${nextCursor - 1}` : `${colorKey}O`
  }
// <-- FIN

describe('GET /colors', () => {
  it('Should return all colors', (done) => {
    chai.request(app)
      .get('/colors')
      .end((err, res) => {
        if (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body.results).to.be.an('array');
          expect(res.body.results).to.eql(['RED', 'GREEN', 'BLUE'])
          done();
        } else {
          console.log(err)
        };
      });
  });
});

describe('GET /errors', () => {
  it('Should return bad request', (done) => {
    chai.request(app)
      .get('/errors')
      .end((err, res) => {
        if (res) {
          expect(res).to.have.status(404)
          done();
        } else {
          console.log(err);
          done();
        };
      });
  });
});

describe('POST /colors', () => {
  it('Should add new colors', (done) => {
    chai.request(app)
      .post('/colors')
      .send(payloadColor())
      .end((err, res) => {
        if (res) {
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body.results).to.be.an('array');
          expect(res.body.results).to.include(getCurrentCulor());
          done();
        } else {
          console.log(err);
          done();
        };
      });
  });
});

describe('GET /colors', () => {
  it('Should return new color list Request', (done) => {
    chai.request(app)
      .get('/colors')
      .end((err, res) => {
        if (res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body.results).to.be.an('array');
          expect(res.body.results).to.be(true);
          done();
        } else {
          console.log(err);
          done();
        };
      });
  });
});