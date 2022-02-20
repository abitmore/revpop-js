import {StorageConnectionGoogleDriveNode, StorageConnectionGoogleDriveWeb, StorageConnectionIpfs} from "../../../lib";
import os from "os";

export const ipfs: StorageConnectionIpfs = {
    host: "localhost",
    port: 5001,
    protocol: "http"
}

export const googleDriveNode: StorageConnectionGoogleDriveNode = {
    tokenPath: `${os.tmpdir()}/google_token.json`,
    installed: {
        client_id: "000000000000-here-should-be-real-client-id.apps.googleusercontent.com",
        project_id: "real-project-id-000000",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_secret: "real-client-secret",
        redirect_uris: [
            "urn:ietf:wg:oauth:2.0:oob",
            "http://localhost"
        ]
    }
}

export const googleDriveWeb: StorageConnectionGoogleDriveWeb = {
    apiKey: 'fake_api_key',
    clientId: 'fake_client_id',
}