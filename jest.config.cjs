/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest", // Трансформация TS/TSX с помощью ts-jest
	},
	moduleNameMapper: {
		"\\.(css|scss|sass)$": "identity-obj-proxy", // моки стилей
		"^@/(.*)$": "<rootDir>/app/$1", // если есть алиасы — подкорректируй под себя или удали
	},
	testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // настройка jest-dom (ниже)
};

