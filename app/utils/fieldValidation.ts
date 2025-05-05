import { FormValue } from "@/components/form";

export type ValidationFunc = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: (value: FormValue, fieldName?: string, errorMessage?: string, ...args: any[]) => string;
  errorMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function isRequired(value: FormValue, fieldName: string = "", errorMessage: string = ""): string {
  if (!value)
    if (errorMessage) {
      return errorMessage
    } else {
      return `Please fill out ${fieldName}`
    } 
  return ""
}

export function noWhiteSpaceString(value: FormValue, fieldName: string = "", errorMessage: string = ""): string {
  if (typeof value == "string") {
    if (/^\s+$/.test(value)) {
      if (errorMessage) {
        return errorMessage
      } else {
        return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)} requires non-whitespace characters`
      } 
    } else {
      return ""
    }
  } else {
    console.error(`noWhiteSpaceStrin not implemented for type ${typeof value}`)
    return ""
  }
  
}

export function isMin(value: FormValue, fieldName: string = "", errorMessage: string = "", min: number = 0,): string {
  if (typeof value == "number") {
    if (value < min)
      if (errorMessage) {
        return errorMessage
      } else {
        return `${fieldName.charAt(0).toLocaleUpperCase()} needs to be at least ${min}`
      } 
    return ""
  } else if (typeof value == "string") {
    if (value.length < min)
      if (errorMessage) {
        return errorMessage
      } else {
        return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)} needs to be at least ${min} characters long`
      } 
    return ""
  } else {
    console.error(`isMin not implemented for type ${typeof value}`)
    return ""
  }
}

export function isMax(value: FormValue, min: number = 0, fieldName: string = "", errorMessage: string = ""): string {
  if (typeof value == "number") {
    if (value > min)
      if (errorMessage) {
        return errorMessage
      } else {
        return `Please fill out ${fieldName}`
      } 
    return ""
  } else if (typeof value == "string") {
    if (value.length > min)
      if (errorMessage) {
        return errorMessage
      } else {
        return `Please fill out ${fieldName}`
      } 
    return ""
  } else {
    console.error(`isMin not implemented for type ${typeof value}`)
    return ""
  }
}

