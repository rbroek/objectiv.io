export declare type DeviceContext = {
    _context_type: 'DeviceContext';
    userAgent: string;
};
export declare function createDeviceContext({ userAgent }: {
    userAgent: string;
}): DeviceContext;
