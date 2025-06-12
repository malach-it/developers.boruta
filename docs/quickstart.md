# Quickstart

The easiest way to try the server is by __using docker compose__. It helps to __compile and run the application__ along with starting the postgreSQL server dependency within one command. The server will start and expose the different __components that will then accessible__ through a browser or raw HTTP calls.

## Administration homepage

![boruta administration homepage](/assets/images/boruta-home.png)

## 1. Get the server source code

```bash
git clone https://github.com/malach-it/boruta-server.git
```

## 2. Run an instance from docker-compose

You can build and run the docker images as follow:

```bash
cd ./boruta-server
docker compose up
```

The applications will be available on different ports (depending on the docker compose environment configuration):
- [http://localhost:8080](http://localhost:8080) for the authorization server
- [http://localhost:8081](http://localhost:8081) for the admin interface
- [http://localhost:8082](http://localhost:8082) for the gateway
- [http://localhost:8083](http://localhost:8083) for the microgateway

Admin credentials are the one seeded and available in the `.env.example` environment file.

### Default admin credentials

In order to authenticate to the administration interface you will be asked for credentials that are by default (seeded from environment variables) `admin@test.test` / `imaynotknowthat`.


## 3. Try Verifiable Credentials flows

### 3.1 Get a DID services API key

boruta uses Universal resolver to generate and resolve DIDs. By default, the server is configured to use [Godiddy](https://godiddy.com/) services, you can __get an API key__ registering to their services and set the corresponding environment variable in `.env.example` file.

```env
DID_SERVICES_API_KEY=<Godiddy generated credentials>
```

### 3.2 Configure the server

On the administration homepage you can navigate to "Load example configuration" link that enables to display an __example configuration to be persisted__ within `Configuration > Upload a configuration file` section. The configuration file is ready to be used, triggering "Upload configuration" button uploads the configuration and persists it.

### 3.3 Generate client DID

Navigating to [example client edit page](http://localhost:8081/clients/00000000-0000-0000-0000-000000000001/edit), in the security section, you have the ability to __generate example client DID__ ("Regenerate client did"). Thiw will generate the DID associated to the client cryptograhic key pair.

---

<div class="centered">

__Credential flows__

---

![issue-hold-verify](/assets/images/issue-hold-verify.png)

</div>

---

### 3.4 Running the flows

boruta is intended to implement [OpenID 4 Verifiable Credentials Issuance](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html) and [OpenID 4 Verifiable Presentations](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html). It helps getting Verifiable Credentials and store them within an identity wallet. And then to present them to be validated by the server.

#### 3.4.1 Issuing a Verifiable credential

On the administration homepage, following "Trigger example pre-authorized code flow with associated boruta wallet (load example data first)" link __triggers a Verifiable Credential issuance flow__. You can then register for a new account, and follow the tunnel. Through consent, you should see the credential offer page. Follow the "Get your verifiable credential" link and you will be redirected to boruta integrated wallet to store the offered credential.

#### 3.4.2 Presenting a Verifiable credential

Back to the administration homepage, you can, after getting the example Verifiable Credential, follow the "Trigger example presentation with associated boruta wallet (issue example credential first)" link. You will be asked to log in and then be redirected to the wallet. Finally, You will be able __to present your credential__.

## Demonstration video (installation)

<iframe src="https://www.loom.com/embed/77006360fdac44bc9113fab9cf30aba5?sid=c690ab5f-97a3-48ce-9b5a-cc98ec3ddd32" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
