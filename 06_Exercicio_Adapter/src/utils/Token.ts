export default class Token{
    private _token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiV2lsbGlhbiBQZW50ZWFkbyIsImRpc2NpcGxpbmEiOiJQT08zIiwidHVybWEiOjJ9.Mt4-KdfnUvw5Ljmvr5HDw2ypSw6xyID-wjNOP44bUqE";

    get token(): string{
        return this._token;
    }
}