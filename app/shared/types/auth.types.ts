import { NextPage } from "next";
import React from "react";


export type TypeRoles = {
    isOnlyAdmin?: boolean;
    isOnlyUser?:boolean;
}

export type NextPageAuth <P={}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = {Component: TypeRoles, children: React.ReactNode}