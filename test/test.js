const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const { expect } = chai;

chai.use(chaiHttp);

describe("Simple Web App Tests", function () {
  it("should return a 200 status code", function (done) {
    chai.request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should contain "Welcome" in the body', function (done) {
    chai.request(server)
      .get("/")
      .end((err, res) => {
        expect(res.text).to.contain("Welcome");
        done();
      });
  });
});

