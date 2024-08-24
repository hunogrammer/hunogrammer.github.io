<script>
	// 특별한 로직은 없으므로 빈 스크립트 블록입니다.
</script>

<style>
	.animate-top-to-bottom-bounce {
		background: radial-gradient(circle at 30% 30%, rgba(255, 165, 0, 0.8), rgba(255, 69, 0, 0.8));
		box-shadow: inset -4px -4px 8px rgba(0, 0, 0, 0.3);
		animation: topToBottomBounce 2s infinite;
	}

	.animate-top-to-bottom-bounce::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		height: 8px;
		background: radial-gradient(ellipse, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
		border-radius: 50%;
		opacity: 0;
		animation: shadowTopToBottom 2s infinite;
	}

	@keyframes topToBottomBounce {
		0%, 100% {
			top: 0;
			animation-timing-function: ease-in;
			transform: translateX(-50%) scale(1, 1);
		}
		45% {
			top: calc(100% - 64px);
			animation-timing-function: ease-out;
			transform: translateX(-50%) scale(1.1, 0.9);
		}
		50% {
			top: calc(100% - 64px);
			animation-timing-function: ease-in;
			transform: translateX(-50%) scale(1, 1);
		}
		95% {
			top: 0;
			animation-timing-function: ease-out;
		}
	}

	@keyframes shadowTopToBottom {
		0%, 100% {
			opacity: 0;
			transform: translateX(-50%) scale(0.5);
		}
		45%, 50% {
			opacity: 1;
			transform: translateX(-50%) scale(1);
		}
		95% {
			opacity: 0;
			transform: translateX(-50%) scale(0.5);
		}
	}
</style>

<div class="flex items-center justify-center">
	<div class="w-20 h-20 overflow-hidden relative">
		<div class="w-16 h-16 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 animate-top-to-bottom-bounce flex items-center justify-center">
			<span class="text-white text-2xl font-bold">?</span>
		</div>
	</div>
</div>
