import { FC, useState } from "react"
import { User } from "../App";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";

interface InfoCardProps {
  user?: User
}

export const InfoCard: FC<InfoCardProps> = ({user}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<User>({
      defaultValues: user ?? {}
  });
  const onSubmit: SubmitHandler<User> = data => {
      setEdit(!edit);
      console.log(data);
  }

  const handleCancel = () => {
      reset();
      setEdit(!edit);
  }

  return (
      <>
          <Button onClick={() => setEdit(!edit)} sx={{mb: 2}}>Edit</Button>
          <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
          >
              <Grid container direction="column">
                  <Grid item xs={6} sx={{mb: 2}}>
                      <TextField disabled={!edit} label="First name" {...register("firstName")} variant="outlined" />
                  </Grid>
                  <Grid item xs={6} sx={{mb: 2}}>
                      <TextField disabled={!edit} label="Last name" {...register("lastName")} variant="outlined" />
                  </Grid>
                  {edit && <Stack direction="row" spacing={8}>
                      <Button onClick={handleCancel}>Cancel</Button>
                      <Button type="submit">Save</Button>
                  </Stack>}
              </Grid>
          </Box>
      </>
  )
}