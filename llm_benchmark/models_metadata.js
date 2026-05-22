const models_data = [
  {
    "id": "omnimerge-v4-iq3-m",
    "model": "ManniX-ITA / Qwen3.6-27B-Omnimerge-v4-IQ3_M",
    "short": "Omnimerge-v4-IQ3_M",
    "overall": 0.8367,
    "prefill": 1300,
    "decode": 48,
    "vram": 15.1,
    "ctx": 150,
    "time": "56:24",
    "hf_link": "https://huggingface.co/ManniX-ITA/Qwen3.6-27B-Omnimerge-v4-GGUF",
    "scores": {
      "parallel_multiple": 0.92,
      "javascript": 0.72,
      "live_parallel_multiple": 0.8333,
      "irrelevance": 0.86,
      "multi_turn_base": null
    }
  },
  {
    "id": "ud-q3-k-xl",
    "model": "unsloth / Qwen3.6-27B-UD-Q3_K_XL",
    "short": "UD-Q3_K_XL",
    "overall": 0.8258,
    "prefill": 1300,
    "decode": 44,
    "vram": 15.5,
    "ctx": 80,
    "time": "46:42",
    "hf_link": "https://huggingface.co/unsloth/Qwen3.6-27B-GGUF",
    "scores": {
      "parallel_multiple": 0.94,
      "javascript": 0.74,
      "live_parallel_multiple": 0.7917,
      "irrelevance": 0.88,
      "multi_turn_base": null
    }
  },
  {
    "id": "4bpw-16gb-vram",
    "model": "ggufbench / Qwen3.6-27B-4bpw-16GB-VRAM",
    "short": "4bpw-16GB-VRAM",
    "overall": 0.8492,
    "prefill": 1500,
    "decode": 48,
    "vram": 15.1,
    "ctx": 100,
    "time": "57:48",
    "hf_link": "https://huggingface.co/ggufbench/Qwen3.6-27B-4bpw-16GB-VRAM",
    "scores": {
      "parallel_multiple": 0.92,
      "javascript": 0.74,
      "live_parallel_multiple": 0.8333,
      "irrelevance": 0.90,
      "multi_turn_base": 0.52,
      "multi_turn_long_context": 0.44
    }
  },
  {
    "id": "iq4-xs-pure",
    "model": "Ununnilium / Qwen3.6-27B-IQ4_XS-pure",
    "short": "IQ4_XS-pure",
    "overall": 0.8492,
    "prefill": 1500,
    "decode": 48,
    "vram": 15.4,
    "ctx": 80,
    "time": "1:00:04",
    "hf_link": "https://huggingface.co/Ununnilium/Qwen3.6-27B-IQ4_XS-pure-GGUF",
    "scores": {
      "parallel_multiple": 0.92,
      "javascript": 0.74,
      "live_parallel_multiple": 0.8333,
      "irrelevance": 0.90,
      "multi_turn_base": 0.56,
      "multi_turn_long_context": 0.46
    }
  },
  {
    "id": "neo-code-2t-iq3-m",
    "model": "DavidAU / Qwen3.6-27B-NEO-CODE-2T-OT-IQ3_M",
    "short": "NEO-CODE-2T-IQ3_M",
    "overall": 0.8283,
    "prefill": 1400,
    "decode": 47,
    "vram": 14.4,
    "ctx": 100,
    "time": "1:06:29",
    "hf_link": "https://huggingface.co/DavidAU/Qwen3.6-27B-NEO-CODE-Di-IMatrix-MAX-GGUF",
    "scores": {
      "parallel_multiple": 0.92,
      "javascript": 0.74,
      "live_parallel_multiple": 0.7917,
      "irrelevance": 0.90,
      "multi_turn_base": null
    }
  },
  {
    "id": "opus-distilled",
    "model": "rico03 / Qwen3.6-27B-Claude-Opus-Reasoning-Distilled",
    "short": "Opus-Distilled",
    "overall": 0.77,
    "prefill": 1200,
    "decode": 45,
    "vram": 14.9,
    "ctx": 100,
    "time": "26:59",
    "hf_link": "https://huggingface.co/rico03/Qwen3.6-27B-Claude-Opus-Reasoning-Distilled-GGUF",
    "scores": {
      "parallel_multiple": 0.82,
      "javascript": 0.74,
      "live_parallel_multiple": 0.75,
      "irrelevance": 0.80,
      "multi_turn_base": null
    }
  },
  {
    "id": "opus-distill-v2",
    "model": "TeichAI / Qwen3.6-27B-Claude-Opus-Reasoning-Distill-v2",
    "short": "Opus-Distill-v2",
    "overall": 0.8234,
    "prefill": 1300,
    "decode": 45,
    "vram": 14.9,
    "ctx": 100,
    "time": "42:23",
    "hf_link": "https://huggingface.co/TeichAI/Qwen3.6-27B-Claude-Opus-Reasoning-Distill-v2-GGUF",
    "scores": {
      "parallel_multiple": 0.92,
      "javascript": 0.74,
      "live_parallel_multiple": 0.7917,
      "irrelevance": 0.88,
      "multi_turn_base": null
    }
  },
  {
    "id": "ud-iq3-xxs",
    "model": "unsloth / Qwen3.6-27B-UD-IQ3_XXS",
    "short": "UD-IQ3_XXS",
    "overall": 0.80,
    "prefill": 1480,
    "decode": 52,
    "vram": 14.5,
    "ctx": 150,
    "time": "48:41",
    "hf_link": "https://huggingface.co/unsloth/Qwen3.6-27B-GGUF",
    "scores": {
      "parallel_multiple": 0.96,
      "javascript": 0.76,
      "live_parallel_multiple": 0.75,
      "irrelevance": 0.84,
      "multi_turn_base": null
    }
  },
  {
    "id": "otq-dyn-q3-k-m",
    "model": "zlaabsi / Qwen3.6-27B-OTQ-DYN-Q3_K_M",
    "short": "OTQ-DYN-Q3_K_M",
    "overall": 0.7767,
    "prefill": 1300,
    "decode": 44,
    "vram": 15.3,
    "ctx": 80,
    "time": "51:01",
    "hf_link": "https://huggingface.co/zlaabsi/Qwen3.6-27B-OTQ-GGUF",
    "scores": {
      "parallel_multiple": 0.88,
      "javascript": 0.74,
      "live_parallel_multiple": 0.7083,
      "irrelevance": 0.88,
      "multi_turn_base": null
    }
  },
  {
    "id": "gguf-4.256bpw",
    "model": "sokann / Qwen3.6-27B-GGUF-4.256bpw",
    "short": "GGUF-4.256bpw",
    "overall": 0.805,
    "prefill": 1500,
    "decode": 48,
    "vram": 15.4,
    "ctx": 80,
    "time": "1:01:22",
    "hf_link": "https://huggingface.co/sokann/Qwen3.6-27B-GGUF-4.256bpw",
    "scores": {
      "parallel_multiple": 0.94,
      "javascript": 0.70,
      "live_parallel_multiple": 0.75,
      "irrelevance": 0.90,
      "multi_turn_base": null
    }
  },
  {
    "id": "deepseek-v4-flash",
    "model": "DeepSeek-API / deepseek-v4-flash",
    "short": "deepseek-v4-flash",
    "overall": 0.6192,
    "prefill": null,
    "decode": null,
    "vram": null,
    "ctx": 1000,
    "time": "11:52",
    "hf_link": "https://platform.deepseek.com/",
    "scores": {
      "parallel_multiple": 0.86,
      "javascript": 0.6,
      "live_parallel_multiple": 0.5833,
      "irrelevance": 0.58,
      "multi_turn_base": null
    }
  },
  {
    "id": "deepseek-v4-flash-thinking-high",
    "model": "DeepSeek-API / deepseek-v4-flash-thinking-high",
    "short": "deepseek-v4-flash-thinking-high",
    "overall": 0.6159,
    "prefill": null,
    "decode": null,
    "vram": null,
    "ctx": 1000,
    "time": "10:06",
    "hf_link": "https://platform.deepseek.com/",
    "scores": {
      "parallel_multiple": 0.84,
      "javascript": 0.64,
      "live_parallel_multiple": 0.5417,
      "irrelevance": 0.64,
      "multi_turn_base": null
    }
  },
  {
    "id": "deepseek-v4-pro-thinking-high",
    "model": "DeepSeek-API / deepseek-v4-pro-thinking-high",
    "short": "deepseek-v4-pro-thinking-high",
    "overall": 0.7783,
    "prefill": null,
    "decode": null,
    "vram": null,
    "ctx": 1000,
    "time": "32:45",
    "hf_link": "https://platform.deepseek.com/",
    "scores": {
      "parallel_multiple": 0.86,
      "javascript": 0.6,
      "live_parallel_multiple": 0.7917,
      "irrelevance": 0.8,
      "multi_turn_base": null
    }
  },
  {
    "id": "4bpw-16gb-vram-mtp",
    "model": "ggufbench / Qwen3.6-27B-4bpw-16GB-VRAM-mtp",
    "short": "4bpw-16GB-VRAM-mtp",
    "overall": 0.8334,
    "prefill": 1300,
    "decode": 80,
    "vram": 15.4,
    "ctx": 32,
    "time": "39:50",
    "hf_link": "https://huggingface.co/ggufbench/Qwen3.6-27B-4bpw-16GB-VRAM",
    "scores": {
      "parallel_multiple": 0.94,
      "javascript": 0.72,
      "live_parallel_multiple": 0.7917,
      "irrelevance": 0.92,
      "multi_turn_base": null,
      "multi_turn_long_context": null
    }
  },
  {
    "id": "bartowski-IQ3_XXS",
    "model": "bartowski / Qwen3.6-27B-IQ3_XXS",
    "short": "bartowski-IQ3_XXS",
    "overall": 0.8183,
    "prefill": 1500,
    "decode": 48,
    "vram": 14.5,
    "ctx": 100,
    "time": "44:49",
    "hf_link": "https://huggingface.co/bartowski/Qwen_Qwen3.6-27B-GGUF",
    "scores": {
      "parallel_multiple": 0.96,
      "javascript": 0.74,
      "live_parallel_multiple": 0.7919,
      "irrelevance": 0.96,
      "multi_turn_base": null,
      "multi_turn_long_context": null
    }
  },
  {
    "id": "prism-pro-dq",
    "model": "Ex0bit / Qwen3.6-27B-PRISM-PRO-DQ",
    "short": "PRISM-PRO-DQ",
    "overall": 0.815,
    "prefill": 1200,
    "decode": 45,
    "vram": 15.3,
    "ctx": 100,
    "time": "1:03:57",
    "hf_link": "https://huggingface.co/Ex0bit/Qwen3.6-27B-PRISM-PRO-DQ",
    "scores": {
      "parallel_multiple": 0.94,
      "javascript": 0.82,
      "live_parallel_multiple": 0.75,
      "irrelevance": 0.88,
      "multi_turn_base": null,
      "multi_turn_long_context": null
    }
  },
];
