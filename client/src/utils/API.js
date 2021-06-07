import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchBooks : function(book){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+book);        
    },
    saveBook : function(bookData){
        return axios.post("/api/books", bookData);
    },
    findBooks : function(){
        return axios.get("/api/books");
    },
    deleteBook : function(id){
        return axios.delete("/api/books/"+id)
    }

}