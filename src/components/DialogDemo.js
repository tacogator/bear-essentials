import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { ArrowRightAlt as ArrowRightIcon } from "@material-ui/icons";
import BearDialog from "./bear/BearDialog";

export default function (props) {
  const [openSimple, setOpenSimple] = useState(false);
  const [openFull, setOpenFull] = useState(false);

  const handlePublish = () => {
    //TODO do something useful
    setOpenFull(false);
  };

  return (
    <>
      <SimpleCard>
        <h2>Simple dialog </h2>
        <Button
          color="secondary"
          variant="outlined"
          endIcon={<ArrowRightIcon />}
          onClick={() => setOpenSimple(true)}
        >
          Open
        </Button>
        <BearDialog
          title="A simple dialog"
          open={openSimple}
          setOpen={setOpenSimple}
        >
          <p>They can't scare me, if I scare them first ― Lady Gaga</p>
        </BearDialog>
      </SimpleCard>
        <SimpleCard>
      <h2>Dialog with event handlers</h2>
      <Button
        color="secondary"
        variant="outlined"
        endIcon={<ArrowRightIcon />}
        onClick={() => setOpenFull(true)}
      >
        Open
      </Button>
      <BearDialog
        title="Confirmation"
        open={openFull}
        setOpen={setOpenFull}
        actions={{
          primary: {
            action: handlePublish,
            label: "Publish",
          },
          secondary: {
            action: () => setOpenFull(false),
            label: "Cancel",
          },
        }}
      >
        <p>They can't scare me, if I scare them first ― Lady Gaga</p>
      </BearDialog></SimpleCard>
    </>
  );
}

const SimpleCard = (props) => <Box paddingTop="2rem">{props.children}</Box>;
