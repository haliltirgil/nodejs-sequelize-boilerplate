const request = require('supertest');
const app = require('../../app');

const WRONG_ID = "wrong-id";
const mockProject = {
    name: "Test project",
}

it('Should be pass with 201 /projects/create-project', async () => {
    const res = await request(app).post(`/api/v1/projects/create-project`).send(mockProject);

    expect(res.statusCode).toBe(201);
    expect(res.body.id).not.toBe(null);
});

it('Should be return 400 Throw Error /projects/create-project', async () => {
    const res = await request(app).post(`/api/v1/projects/create-project`).send({});

    expect(res.statusCode).toBe(400);
});

it('Should be pass with 200 /projects/get-all-projects', async () => {
    await request(app).post(`/api/v1/projects/create-project`).send(mockProject);
    mockProject.name = "Test project 2";
    await request(app).post(`/api/v1/projects/create-project`).send(mockProject);

    const res = await request(app).get(`/api/v1/projects/get-all-projects`);

    expect(res.body.length).toBe(2);
    expect(res.statusCode).toBe(200);
});

it('Should be pass with 200 /projects/get-project-by-id/:id', async () => {
    const project = await request(app).post(`/api/v1/projects/create-project`).send(mockProject);

    const res = await request(app).get(`/api/v1/projects/get-project-by-id/${project.body.id}`).expect(200);
    expect(res.body.name).toEqual(project.body.name);
});

it('Should be return 400 Throw Error /projects/get-project-by-id/:id', async () => {
    await request(app).get(`/api/v1/projects/get-project-by-id/${WRONG_ID}`).expect(400);
});

it('Should be pass with 200 /projects/update-project-by-id/:id', async () => {
    const project = await request(app).post(`/api/v1/projects/create-project`).send(mockProject);

    await request(app).put(`/api/v1/projects/update-project-by-id/${project.body.id}`).send({ name: "update test" }).expect(204);
});

it('Should be return 400 Throw Error /projects/update-project-by-id/:id', async () => {
    await request(app).put(`/api/v1/projects/update-project-by-id/${WRONG_ID}`).send({ name: "test" }).expect(400);
});

it('Should be pass with 200 /projects/delete-project-by-id/:id', async () => {
    const project = await request(app).post(`/api/v1/projects/create-project`).send(mockProject);

    await request(app).delete(`/api/v1/projects/delete-project-by-id/${project.body.id}`).expect(200);
});

it('Should be return 400 Throw Error /projects/delete-project-by-id/:id', async () => {
    await request(app).delete(`/api/v1/projects/delete-project-by-id/${WRONG_ID}`).expect(400);
});


