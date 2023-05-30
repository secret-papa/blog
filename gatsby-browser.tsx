/* eslint-disable import/prefer-default-export */
import React from "react";
import { LayoutTemplate } from "./src/templates";

export const wrapPageElement = ({ element }: any) => <LayoutTemplate>{element}</LayoutTemplate>;
