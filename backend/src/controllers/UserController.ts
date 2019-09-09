import express from 'express';
import { UserModel } from '../schemas';

class UserController {

    index(req: express.Request, res: express.Response) {
        const id: String = req.params.id
        UserModel.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: 'User has not found'
                })
            }

            res.json(user); // else
        })
    }
    create(req: any, res: any) {
        res.header('Content-Security-Policy', 'img-src "self" ');

        console.log(req.body);
        const postData = {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
        }
        res.send();
        const user = new UserModel(postData);
        user.save().then((obj: any) => {
            res.json(obj)
        }).catch((reason: any) => {
            res.json(reason);
        });
    }

    delete(req: express.Request, res: express.Response) {
        const id: String = req.params.id
        UserModel.findOneAndRemove({_id: id})
        .then(user => {

            user && res.json({ // if user { ...
                message: `${user.name} deleted`
            });
        }).catch(err => {
            res.json({
                message: 'User not found'
            });
        })
    }

    getMe(){ // to show self information
        return 1
    }
}

export default UserController;