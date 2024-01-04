import {
  addNotehandler,
  deleteNoteByIdHandler,
  editNoteByIdHandler,
  getAllNoteshandler,
  getNoteByIdhandler,
} from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNotehandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNoteshandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdhandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];
export default routes;
