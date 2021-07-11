module.exports = class Anime{

    constructor(mal_id, title, synopsis, episodes, rating, img_url){
        this.id = mal_id;
        this.title = title;
        this.synopsis = synopsis;
        this.episodes = episodes;
        this.rating = rating;
        this.image = img_url;
    }

    get id(){
        return this._id;
    }
    set id(mal_id){
        this._id = mal_id;
    }

    get title(){
        return this._title;
    }
    set title(title){
        this._title = title;
    }

    get synopsis(){
        return this._synopsis;
    }
    set synopsis(synopsis){
        this._synopsis = synopsis;
    }

    get episodes(){
        return this._episodes;
    }
    set episodes(eps){
        this._episodes = eps;
    }

    get rating(){
        return this._rating;
    }
    set rating(rating){
        this._rating = rating;
    }

    get image(){
        return this._image;
    }
    set image(img_url){
        this._image = img_url;
    }
}
