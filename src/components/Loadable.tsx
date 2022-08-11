import { FC, ReactElement } from "react";
import { CircularProgress } from '@mui/material';

interface LoadableProps {
    loading: boolean;
    children: ReactElement
}
export const Loadable: FC<LoadableProps> = ({loading, children} ) => loading ? <CircularProgress /> : children
