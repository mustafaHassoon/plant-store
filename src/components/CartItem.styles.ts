import { styled } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Box } from "@mui/material";

export const CartItemContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
}));

export const LeftColumn = styled(Grid)(({ theme }) => ({
  width: 150,
}));

export const MiddleColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
  marginLeft: theme.spacing(2),
}));

export const RightColumn = styled(Grid)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  width: 150,
  height: 150,
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "5px 5px 7px rgba(0, 0, 0, 0.25)",
}));
