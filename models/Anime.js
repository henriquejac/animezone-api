export class Anime{

    constructor(id, title, synopsis, episodes, status){
        this.id = id;
        this.title = title;
        this.synopsis = synopsis;
        this.episodes = episodes;
        this.status = status;
    }

    get id(){
        return this.id;
    }

    get title(){
        return this.title;
    }

    get synopsis(){
        return this.synopsis;
    }

    get episodes(){
        return this.episodes;
    }

    get status(){
        return this.status;
    }
}
