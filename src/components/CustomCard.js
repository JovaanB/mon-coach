import React from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import { ModeEditOutlined } from "@mui/icons-material";

export const CustomCard = ({ children, title, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader title={title} action={<ModeEditOutlined />} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
