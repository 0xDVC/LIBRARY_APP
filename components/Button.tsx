import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends Omit<TouchableOpacityProps, 'children'> {
    text: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    color?: string;
    loading?: boolean;
}

const defaultColors = {
    primary: 'blue-500',
    secondary: 'gray-500',
    outline: 'blue-500',
};

const getVariantStyle = (variant: ButtonVariant, color: string): string => {
    switch (variant) {
        case 'primary':
            return `bg-${color}`;
        case 'secondary':
            return `bg-${color}`;
        case 'outline':
            return `bg-transparent border border-${color}`;
        default:
            return `bg-${color}`;
    }
};

const getTextStyle = (variant: ButtonVariant, color: string): string => {
    switch (variant) {
        case 'primary':
        case 'secondary':
            return 'text-white font-bold';
        case 'outline':
            return `text-${color} font-bold`;
        default:
            return `text-${color} font-bold`;
    }
};

const sizeStyles: Record<ButtonSize, string> = {
    small: "py-2 px-3",
    medium: "py-3 px-4",
    large: "py-4 px-6",
};

export default function Button({
                                   text,
                                   variant = 'primary',
                                   size = 'medium',
                                   fullWidth = false,
                                   color,
                                   loading = false,
                                   className = '',
                                   ...props
                               }: ButtonProps): React.ReactElement {
    const baseStyle = "rounded-lg flex items-center justify-center";
    const buttonColor = color || defaultColors[variant];

    const buttonStyle = `${baseStyle} ${getVariantStyle(variant, buttonColor)} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
    const textStyle = `text-center ${getTextStyle(variant, buttonColor)}`;

    return (
        <TouchableOpacity
            className={buttonStyle}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' || variant === 'secondary' ? 'white' : buttonColor} />
            ) : (
                <Text className={textStyle}>
                    {text}
                </Text>
            )}
        </TouchableOpacity>
    );
}