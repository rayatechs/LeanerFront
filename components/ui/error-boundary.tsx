"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import { Button } from "./button"
import { Card } from "./card"

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
    error: Error | null
    errorInfo: ErrorInfo | null
}

export default class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    override state: ErrorBoundaryState = {
        hasError: false,
        error: null,
        errorInfo: null,
    }

    // ⚡ اضافه کردن override
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error, errorInfo: null }
    }

    // ⚡ اضافه کردن override
    override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ error, errorInfo })
        // ارسال خطا به سرویس‌های مانیتورینگ
        console.error("ErrorBoundary caught an error:", error, errorInfo)
    }

    override render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center" style={{ minHeight: "100vh", padding: "1rem" }}>
                    <Card className="rounded-[16px] p-[12px] min-w-[280px]">
                        <div className="flex flex-col gap-[18px]">
                            <h1 className="text-center text-[red] font-bold text-[18px]">
                                اوپس! یک خطا رخ داد
                            </h1>
                            <p className="text-gray text-[16px] text-center">
                                متاسفانه یک مشکلی پیش آمده و بخش موردنظر نمایش داده نمی‌شود.
                            </p>

                            {this.state.error && (
                                <Card className="p-[8px] rounded-[8px]">
                                    <p className="text-[red] text-[16px] font-medium">
                                        {this.state.error?.name}: {this.state.error?.message}
                                    </p>
                                    {this.state.errorInfo && (
                                        <p className="text-[12px] text-gray mt-[12px]" style={{ whiteSpace: "pre-wrap" }}>
                                            {this.state.errorInfo?.componentStack}
                                        </p>
                                    )}
                                </Card>
                            )}

                            <Button className="bg-red-500" color="red" onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}>
                                تلاش دوباره
                            </Button>
                        </div>
                    </Card>
                </div>
            )
        }

        return this.props.children
    }
}
