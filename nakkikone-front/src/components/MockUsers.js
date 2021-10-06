import React, { useEffect, useState } from "react";
import { databaseService } from "../functions/databaseService";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";

export default function MockUsers({ updateActiveUser, users }) {
  const [activeUser, setActiveUser] = useState({});

  // when you select a user
  const onChangeUser = (e) => {
    const selectedUser = users.find((u) => u.id === e.target.value);
    setActiveUser(selectedUser);
  };
  useEffect(() => {
    updateActiveUser(activeUser);
  }, [activeUser]);

  if (users === undefined) {
    return <p>Fetching users, please wait.</p>;
  } else {
    return (
      <div>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="selected user"
            defaultValue={users[0].id}
            name="radio-buttons-group"
            onChange={onChangeUser}
          >
            {users.map((user, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={user.id}
                  control={<Radio />}
                  label={user.firstName}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}
