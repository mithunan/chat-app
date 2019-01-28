const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Myers',
            room: 'Worst'
        }, {
            id: '2',
            name: 'Jackson',
            room: 'Greatest'
        }, {
            id: '3',
            name: 'Jordan',
            room: 'Greatest'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'mith',
            room: 'mm'
        };
        var resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        var userId = '99';
        var user = users.getUser(userId);
        expect(user).toBeFalsy();
    })

    it('should return names for Greatest', () => {
        var userList = users.getUserList('Greatest');
        expect(userList).toEqual(['Jackson', 'Jordan']);
    });
    it('should return names for Worst', () => {
        var userList = users.getUserList('Worst');
        expect(userList).toEqual(['Myers']);
    });

})