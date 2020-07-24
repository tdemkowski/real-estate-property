import { Router } from 'express';
import UserService from '../services/user.service';

const router = Router();
router.get('/user')

router.get('/user/:userId', async (req, res) => {
    const userService = new UserService();
    const user = await userService.getUser(req.params.userId);
    console.log(user);
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(400).send();
    }
})

router.post('/user')

router.delete('/user')

router.put('/user')

export default router;