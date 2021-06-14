module.exports = class Anime{

    constructor(mal_id, title, synopsis, episodes, status, rating){
        this.id = mal_id;
        this.title = title;
        this.synopsis = synopsis;
        this.episodes = episodes;
        this.status = status;
        this.rating = rating;
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    get synopsis(){
        return this._synopsis;
    }

    get episodes(){
        return this._episodes;
    }

    get status(){
        return this._status;
    }

    get rating(){
        return this._rating;
    }

    set id(mal_id){
        this._id = mal_id;
    }

    set title(title){
        this._title = title;
    }

    set synopsis(synopsis){
        this._synopsis = synopsis;
    }

    set episodes(eps){
        this._episodes = eps;
    }

    set status(stats){
        this._status = stats;
    }

    set rating(rating){
        this._rating = rating;
    }
}
