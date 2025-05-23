import { FormValue } from "@/components/form/form";
import { dateTodayFormatted } from "./dateHelperFuncs";

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

export function isMin(value: FormValue, fieldName: string = "", errorMessage: string = "", additionalProps: { min: number | "today"; }): string {
  const min: (number | "today") = additionalProps.min ?? 0;
  if (min == "today") {
    if (Date.parse((value as string)) < Date.parse(dateTodayFormatted()))
      return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)}  needs to be at least ${dateTodayFormatted()}`
    else {
      return ""
    }
  } else {
  try  {
    value = parseInt((value as string))
    if (value < min){
      if (errorMessage) {
        return errorMessage
      } else {
        return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)}  needs to be at least ${min}`
      } 
    } else {
      return ""
    }
  } catch (error) {
    console.error(`isMin not implemented for type ${typeof value}: ${error}`)
    return ""
  }}
}

export function isLessThan(value: FormValue, fieldName: string = "", errorMessage: string = "", additionalProps: { comparisonValue: string; }): string {
  value = parseInt((value as string))
  const comparisonValue = parseInt((additionalProps.comparisonValue as string))
  if (value > comparisonValue){
    if (errorMessage) {
      return errorMessage
    } else {
      return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)}  needs to be smaller than ${comparisonValue}`
    } 
  } else {
    return ""
  }
}

export function isLessEqualThanHalf(value: FormValue, fieldName: string = "", errorMessage: string = "", additionalProps: { comparisonValue: string; }): string {
  value = parseInt((value as string))
  const comparisonValue = parseInt((additionalProps.comparisonValue as string))
  if (comparisonValue == 1 && value > 1) {
    if (errorMessage) {
      return errorMessage
    } else {
      return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)}  needs to be equal to 1 because you set ${fieldName} 1`
    } 
  } else if (comparisonValue == 1) {
    return ""
  }
  if (value > comparisonValue/2){
    if (errorMessage) {
      return errorMessage
    } else {
      return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)}  needs to be smaller or equal to ${Math.floor(comparisonValue/2)}`
    } 
  } else {
    return ""
  }
}

export function isMax(value: FormValue, fieldName: string = "", errorMessage: string = "", additionalProps: { max: number; }): string {
  const max: number = additionalProps.max ?? 100;
  try  {
    value = parseInt((value as string))
    if (value > max) {
      if (errorMessage) {
        return errorMessage
      } else {
        return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)} is not allowed to be higher than ${max}`
      } 
    } else {
      return ""
    }
  } catch (error) {
    console.error(`isMax is not implemented for type ${typeof value}: ${error}`)
    return ""
  }
}

export function hasMinLength(value: FormValue, fieldName: string = "", errorMessage: string = "", additionalProps: { min: number; }): string {
  const min: number = additionalProps.min ?? 2;
  if (typeof value == "string") {
    if (value.length < min) {
        if (errorMessage) {
          return errorMessage
        } else {
          return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)} needs to be at least ${min} characters long`
        }
    } else {
      return ""
    }     
  } else {
    console.error(`hasMinLength is not implemented for type ${typeof value}`)
    return ""
  }
}

export function hasMaxLength(value: FormValue, fieldName: string = "", errorMessage: string = "", additionalProps: { max: number; }): string {
  const max: number = additionalProps.max ?? 100;
  if (typeof value == "string") {
    if (value.length > max) {
        if (errorMessage) {
          return errorMessage
        } else {
          return `${fieldName.charAt(0).toLocaleUpperCase() + fieldName.slice(1)} is not allowed to be longer than ${max} characters`
        }
    } else {
      return ""
    }     
  } else {
    console.error(`hasMaxLength is not implemented for type ${typeof value}`)
    return ""
  }
}