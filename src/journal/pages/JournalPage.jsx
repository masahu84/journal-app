import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/journalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);
  const onclikNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onclikNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
