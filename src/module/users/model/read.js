class UserReader {
    
    static getAllUsers() {
     const query = 'select * from web.users;';
     return query;
    }
}

module.exports = UserReader; 
