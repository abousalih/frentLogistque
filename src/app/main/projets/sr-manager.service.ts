import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export interface FileStatus {
    requestType: string
    content: Blob | null;
    progress: number;
    status: "PENDING" | "IN_PROGRESS" | "DONE";
}

@Injectable({
    providedIn: 'root'
})
export class SrManagerService {

    public headers: HttpHeaders;

    private fileStatus: FileStatus = {requestType: 'requestType', content: null, progress: 0, status: 'PENDING'};
    private filenames: string[] = [];

    constructor(private http: HttpClient) {}

    public getResource(url) {
        return this.http.get(url, {headers: this.headers});
    }

    public getResources(url) {
        return this.http.get(url, {headers: this.headers});
    }

    public saveRessource(url: string, entity) {
        return this.http.post(url, entity, {headers: this.headers});
    }

    public postRessource(urlRessource: string, data) {
        return this.http.post(urlRessource, data, {headers: this.headers});
    }

    public deleteRessource(url: string) {
        return this.http.delete(url, {headers: this.headers});
    }

    public putRessource(urlRessource: string, data) {
        return this.http.put(urlRessource, data, {headers: this.headers});
    }

    public patchRessource(urlRessource: string, data) {
        return this.http.patch(urlRessource, data, {headers: this.headers});
    }


}
