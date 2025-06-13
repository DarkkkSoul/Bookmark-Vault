import { Bookmark } from "../models/bookmark.model.js";

export const createBookmark = async (req, res, next) => {
    try {
        // const [name, url, category] = req.body;

        const bookmark = await Bookmark.create({
            ...req.body,
            owner: req.user._id,
        });

        res.status(200).json({
            message: 'Bookmark created successfully',
            data: {
                bookmark
            }
        })
    } catch (error) {
        next(error);
    }
}

export const viewBookmark = async (req, res, next) => {
    console.log('getUsersBookmarks controller hit.');
    console.log('req.user.id:', req.user ? req.user.id : 'req.user is undefined/null');
    try {

        //   if(req.params.id !== req.user.id){
        //      const error = new Error("Unauthorized");
        //      error.statusCode = 404;
        //      throw error;
        //   }

        const bookmarks = await Bookmark.find({ owner: req.user.id });

        if (!bookmarks || bookmarks.length === 0) {
            return res.status(200).json({ data: { bookmarks: [] }, message: 'No bookmarks found.' });
        } if (!bookmarks || bookmarks.length === 0) {
            return res.status(200).json({ data: { bookmarks: [] }, message: 'No bookmarks found.' });
        }

        if (bookmarks.length < 1) {
            const error = new Error("Please add bookmarks");
            error.statusCode = 400;
            throw error;
        }

        res.status(200).json({
            message: 'Bookmarks found',
            data: {
                bookmarks
            }
        })

    } catch (error) {
        console.error('Error in getUsersBookmarks:', error);
        next(error);
    }
}

export const deleteBookmark = async (req, res, next) => {
    try {

        const bookmark = await Bookmark.findById(req.params.id);

        await bookmark.deleteOne();

        res.status(200).json({
            message: 'Bookmark deleted successfully',
            data: {
                bookmark
            }
        })
    } catch (error) {
        next(error);
    }
}