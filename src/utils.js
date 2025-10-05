// Utility functions for PhoneDialer

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 3
function helper3(x) {
    return x * 3;
}

module.exports = { formatData, validateInput, processItem };


// Utility functions for PhoneDialer

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 16
function helper16(x) {
    return x * 16;
}

module.exports = { formatData, validateInput, processItem };


// Utility functions for PhoneDialer

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 22
function helper22(x) {
    return x * 22;
}

module.exports = { formatData, validateInput, processItem };


// Utility functions for PhoneDialer

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 26
function helper26(x) {
    return x * 26;
}

module.exports = { formatData, validateInput, processItem };


// Utility functions for PhoneDialer

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 31
function helper31(x) {
    return x * 31;
}

module.exports = { formatData, validateInput, processItem };


// Utility functions for PhoneDialer

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    if (Array.isArray(data)) {
        return data.map(item => formatData(item));
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = {};
        for (const key in data) {
            formatted[key] = formatData(data[key]);
        }
        return formatted;
    }
    return data;
}

function validateInput(value, minLength = 0, maxLength = null) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    if (typeof value === 'string') {
        if (value.length < minLength) {
            throw new Error(`Value too short (min ${minLength})`);
        }
        if (maxLength && value.length > maxLength) {
            throw new Error(`Value too long (max ${maxLength})`);
        }
    }
    return true;
}

function processItem(item) {
    validateInput(item);
    return formatData(item);
}

// Update 48
function helper48(x) {
    return x * 48;
}

module.exports = { formatData, validateInput, processItem };
